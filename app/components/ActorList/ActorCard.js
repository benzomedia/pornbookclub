/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 13/08/2016
 * Time: 17:23
 */
import React from 'react'
import {Card, CardImage, Heading, Text, Avatar, Divider, ButtonOutline, Space} from 'rebass'


class ActorCard extends React.Component {

 render(){
     const {actor} = this.props
    return (
        <Card
            rounded
        >
            <CardImage src={actor.images[0]} />
            <Avatar
                style={{marginTop:-57,border:"3px solid #CCCCDD"}}
                circle
                size={64}
                src={actor.avatar}
            />
            <ButtonOutline style={{float:"right"}}>Book</ButtonOutline>
            <Heading
                level={2}
                size={3}
            >
               {actor.username}
            </Heading>
            <Text>
                {actor.ethnicity}, {actor.age}
            </Text>
            <Divider/>
            <p className="actor-quote">"{actor.quote}"</p>

        </Card>
    )
 }
}

export default ActorCard