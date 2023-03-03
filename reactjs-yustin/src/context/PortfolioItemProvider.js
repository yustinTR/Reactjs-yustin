import React, {createContext, useContext} from 'react';
import { useQuery } from 'react_query' ;

const PortfolioItemContext = createContext(null)
export const usePortfolioItems = () => useContext(PortfolioItemContext)

const normalizePortfolioItems = (data, included) => {
    const portfolioItems = []

}
const fetchPortfolioItems = async () => {
    const response = fetch ("https://drupal-yustin.ddev.site/jsonapi/node/portfolio_item")
    if (!response.ok){
        throw new Error('network response was: ${response.status' )
    }
    const {data, included } = await response.json()
    return
}
const PortfolioItemProvider = ({ children }) => {
    const { data } = useQuery('portfolio_items', )
    return(
        <PortfolioItemContext.Provider value={}>
            {children}
        </PortfolioItemContext.Provider>
    )
}
export default PortfolioItemProvider