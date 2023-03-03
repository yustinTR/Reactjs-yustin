import React from 'react';
import PropTypes from "prop-types";
import { QueryClient } from 'react_query' ;

const QueryClient = new QueryClient()

const QueryClient =({}) =>(
    <QueryClient client={queryClient}>
        {children}
    </QueryClient>
)

JsonApiProvider.propTypes = {}
export default  JsonApiProvider