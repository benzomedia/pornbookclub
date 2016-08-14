/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 13/08/2016
 * Time: 16:12
 */
import React from 'react'
import ActorCard from './ActorCard'
import {Container} from 'rebass'


class ActorList extends React.Component {

    render() {
        return (
            <div className="actor-list-div" style={{marginTop: 50, paddingLeft: 16, paddingRight: 16}}>
                <div className="row">
                    {this.props.actors.actors.map(function (actor, index) {
                        return (
                            <div key={index} className="col-xs-6 col-sm-4 col-md-3">
                                <ActorCard key={index} actor={actor} style={{margin: 10}}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ActorList