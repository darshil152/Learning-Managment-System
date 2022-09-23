import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="container__item landing-page-container">
                        <div class="content__wrapper">

                            <p class="coords">N 49° 16' 35.173"  /  W 0° 42' 11.30"</p>
                            <div class="ellipses-container">
                                <h2 class="greeting">Welome</h2>
                                <div class="ellipses ellipses__outer--thin">
                                    <div class="ellipses ellipses__orbit"></div>
                                </div>
                                <div class="ellipses ellipses__outer--thick"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
