import React, { Component } from 'react'
import { UserConsumer } from './userContext'
import { LastNameConsumer } from './lastNameContext'
import { useContext } from 'react'

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {
            (firstname) =>{
                return <LastNameConsumer>
                    {
                        (lastname)=>{
                            return (
                              <div>
                                Hi {firstname} {lastname}
                              </div>
                            );
                        }
                    }
                </LastNameConsumer>
            }
        }
      </UserConsumer>
    )
  }
}

export default ComponentF
