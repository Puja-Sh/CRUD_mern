import React from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';


const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Caption here',
        description: 'beautiful and peacefull place',
        imageUrl:'https://images.unsplash.com/reserve/Pu9MTKTuWOi7dDqIyZqA_urbex-ppc-062.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
        address:'Some where in the word B/180',
        creator: 'u1',
        location: {
            lat: -73.9878584,
            lng: 40.7484405
        }
    },
    {
        id:'p2',
        title:'Me here he there',
        description: 'beautiful and peacefull place',
        imageUrl:'https://images.unsplash.com/reserve/Pu9MTKTuWOi7dDqIyZqA_urbex-ppc-062.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
        address:'Some where in the word B/180',
        creator: 'u2',
        location: {
            lat: -73.9878584,
            lng: 40.7484405
        }
    }
]


const UserPlaces = () =>{
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces}/>
}

export default UserPlaces;