import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://drupal-yustin.ddev.site/jsonapi/node/portfolio_item`)
            .then(res => {
                const persons = res.data.data;
                console.log(persons);
                this.setState({ persons });
            })
    }

    render() {
        return (
            <ul>
                {
                    this.state.persons
                        .map(person =>
                            <li key={person.id}>{person.attributes.title}</li>
                        )
                }
            </ul>
        )
    }
}