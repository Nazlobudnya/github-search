import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useLazyQuery } from '@apollo/react-hooks';
import { useDebouncedCallback } from 'use-debounce';

import { CardList } from './components/card/cardList.component';
import { SEARCH } from './query/github/search.query';

import './Main.css';

const Main = () => {
  const [inputRepo, setInputRepo] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const [getRepos, { loading, data }] = useLazyQuery(SEARCH);
  const [getReposDebounced, cancelRepoRequest] = useDebouncedCallback(
    repoName => {
      getRepos({ variables: { repoName } });
    },
    250,
    { maxWait: 1500 }
  );

  useEffect(() => {
    if (!loading) {
      setIsSearching(false);
    }
  }, [loading]);

  const handleSubmit = _ => {
    if (inputRepo.length < 2) {
      return;
    }
    cancelRepoRequest();
    getReposDebounced(inputRepo);
    setIsSearching(true);
  };
  const handleInputChange = event => {
    setInputRepo(event.target.value);
  };

  const renderCardList = () => {
    if (!loading && data) {
      if (data.search.edges.length === 0) {
        return <p>Nothing is found</p>;
      }

      return <CardList repos={data.search.edges} />;
    }
  };

  return (
    <div>
      <div className="navbar">GitHub search</div>
      <div className="search-bar">
        <Form onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              loading={isSearching}
              placeholder="Repository's name"
              value={inputRepo}
              onChange={handleInputChange}
            />
            <Button type="submit" onSubmit={handleSubmit}>
              Search
            </Button>
          </Form.Group>
        </Form>
      </div>
      <div className="cards-holder">{renderCardList()}</div>
    </div>
  );
};

export { Main };
