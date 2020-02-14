import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';

const CardItem = ({
  repository: {
    name,
    description,
    url,
    primaryLanguage,
    watchers: { totalCount },
    owner
  }
}) => {
  return (
    <Card>
      <Image src={owner.avatarUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">{owner.login}</span>
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href={url}>
          <Icon name="user" />
          {url}
        </a>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          {totalCount}
        </a>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          {primaryLanguage ? primaryLanguage.name : 'not specified'}
        </a>
      </Card.Content>
    </Card>
  );
};

CardItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  primaryLanguage: PropTypes.object,
  totalCount: PropTypes.number,
  owner: PropTypes.object
};

export { CardItem };
