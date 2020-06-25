import React from 'react';

const Favorite = (props) => {
    return (
        <main>
            <span className="span-cloche">
                <i className="fa fa-heart fa-2x " aria-hidden="true" onClick={props.addToFavorite}></i></span>
        </main>
    );
}

export default Favorite;