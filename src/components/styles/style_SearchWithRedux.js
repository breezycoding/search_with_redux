import styled, {css} from 'styled-components';

const InputSearch = styled.input`
    padding:5px;
`;
const InputSearchContainer = styled.div`
    display: block;
    padding: 10px;
    text-align:center;
`;
const TableSearchResults = styled.table`
    border-collapse: collapse;
    border:1px solid grey;
    font-size: 12px;
    font-size: 12px;
    width: 80%;
    margin: 0 auto;
`;

const TableSearchResultsHead = styled.th`
    border:1px solid grey;
    padding: 5px;
`;

const TableSearchResultsData = styled.td`
    border:1px solid grey;
    padding: 5px;
`;

const HighlightSpan = styled.span`
    background-color:red;
    color:white;
    padding:1px;
`;

export {InputSearch, InputSearchContainer, TableSearchResults, TableSearchResultsHead, TableSearchResultsData, HighlightSpan};