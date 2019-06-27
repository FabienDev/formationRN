import * as types from '../actions/velibTypes';

export function addBookmark(velib)
{
	return {type: types.VELIB_BOOKMARKED, payload: velib}
}

export function removeBookmark(id)
{
	return {type: types.VELIB_UNBOOKMARKED, payload: id}
}