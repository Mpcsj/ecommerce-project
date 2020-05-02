import {createSelector} from 'reselect'
const TAG = 'shop.selector'
const COLLECTION_ID_MAP={
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}
const selectShop = state=>state.shop


export const selectCollections =createSelector(
    [selectShop],
    (shop)=>shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections) => Object.keys(collections).map(key=>collections[key])
)
// export const selectCollection = collectionUrlParam=>{
//     // console.log(TAG,'selectCollection: ',collectionUrlParam)
//     return createSelector(
//         [selectCollections],
//         collections =>
//             collections.find(
//                 collection=>collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//             )
//     )
// }
export const selectCollection = collectionUrlParam=>{
    console.log(TAG,'selectCollection123: ',collectionUrlParam)
    return createSelector(
        [selectCollections],
        collections => {
            console.log(TAG,'collections(todas): ',collections)
            return collections[collectionUrlParam]
        }
    )
}