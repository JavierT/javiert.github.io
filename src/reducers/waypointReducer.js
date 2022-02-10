const initialState = [
    {
    id: 0,
    showWaypoint: false
    }
];

export default function(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_SHOW_WAYPOINT':
            return {
                ...state,
                showWaypoint: action.payload
            }
        default:
            return state
    }
}