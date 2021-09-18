
import React, {Component} from 'react';
import {Fragment}  from 'react';
import BooksItem from './BooksItem';

export default class ListBooks extends Component{
    
    render() {

        return (
            <Fragment>
                <BooksItem/>
            </Fragment>
        );
      }
    }
