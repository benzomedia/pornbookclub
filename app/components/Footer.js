/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 12/08/2016
 * Time: 10:31
 */

import React from 'react'

var date = new Date().getFullYear();

const Footer = () =>
    (
        <div className="footer">
            <h4 className="text-center">Porn Book Club</h4>
            <p className="text-center">&copy; {date} All rights reserved. Porn Book Club</p>
        </div>
    );

export default Footer