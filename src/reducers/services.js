import data from './../data.json';

export default function services(state = { ...data }, action = {}) {
    switch (action.type) {
        default:
            return state;
    }
}