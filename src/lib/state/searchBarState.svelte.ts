let searchState = $state({
    isSearchOpen: false,
    searchText: ''
})

export function getSearchState (){
    const setSearchText = (submittedText: string) => {
        searchState = { ...searchState, searchText: submittedText}
    } 

    const setIsSearchOpen = (searchOpen: boolean) => {
        searchState = {...searchState, isSearchOpen: searchOpen}
            console.log($state.snapshot(searchState))

        searchState = {...searchState, searchText: ''}
    }
        
    return {
        get searchState() {
            return searchState
        }, 
        setSearchText,
        setIsSearchOpen

    }

}