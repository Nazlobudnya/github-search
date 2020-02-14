import React from 'react';
import PropTypes from 'prop-types';
import { CardItem } from './cardItem.component';
import { Card } from 'semantic-ui-react';

const CardList = ({ repos }) => {
  const renderCards = () => {
    return repos.map(({ node }) => {
      return <CardItem key={node.id} raised repository={node} />;
    });
  };

  return (
    <>
      <Card.Group centered={true}>{renderCards()}</Card.Group>
    </>
  );
};

CardList.propTypes = {
  repos: PropTypes.array
};

export { CardList };
