
import GridPostList from './GridPostList'
import { boolean } from 'zod';
import { Loader } from 'lucide-react';
import { Models } from 'appwrite';
import GridPostList from './GridPostList';

type SearchResults = {
  const isSearchFetching = boolean;
  searchedPosts: Models.Document[];
}

const SearchResults = ({ isSearchFetching, searchedPosts }: SearchResults) => {
  if(isSearchFetching)
  return <Loader />

  if(isSearchFetching && searchedPosts.documents.lenght > 0){
    return(
      <GridPostList posts={searchedPosts.documents} />
    )
  } 
    return (
      <p className="w-full mt-10 text-center text-light-4">No results found</p>
    )
}

export default SearchResults
