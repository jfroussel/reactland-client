import { CATALOG_LIST} from '../actions/action-types'


export default function CatalogReducer(state = [], action) {
    switch (action.type) {
        case CATALOG_LIST :
            return {
                list: action.payload
            }
        default:
            return state
    }
}
