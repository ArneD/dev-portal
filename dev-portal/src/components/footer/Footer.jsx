// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react'
import { observer } from 'mobx-react'
import './Footer.scss';

export const Footer = observer(
  class Footer extends React.Component {
    render() {
      var useTag = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vlaanderen-logo"></use>';

      var version = window.baseRegistriesVersion ? ", versie " + window.baseRegistriesVersion : ", developer versie";

      return <footer>
        <div style={{ height: 0, width: 0, position: 'absolute', visibility: 'hidden', display: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg"><symbol id="vlaanderen-logo" viewBox="0 0 19.61 31.05"><title>vlaanderen-logo</title><path data-name="Logo Vlaanderen" d="M19.61 16c-1.08-.82-1.59 0-2.27 0s-1.12-1-1.56-.75c-.85.43.34 2 .86 2.27a12.51 12.51 0 0 0 1.18.59 1.72 1.72 0 0 1 1 1.55 3 3 0 0 1 0 .75c-.31 1.32-2.64 2.52-4 1.61a3 3 0 0 1-1.4-2c-.36-1.73-1.62-3-2-4.7-.25-1-.43-2.12-.7-3.15S10.17 10 9.94 9A27.44 27.44 0 0 0 9 5.92C7.71 2.61 7.14 2.85 7.14 2.85s.46.92 2.15 9A47.8 47.8 0 0 0 10.42 17c.16.42.44 1.32.62 1.72.54 1.16 2 2.92 2.05 4.51.05.92.16 1.68.18 2.37a7.37 7.37 0 0 0 .24 1.4c.35 1 3.14 4.09 6.1 4.09v-2.41a10.88 10.88 0 0 1-5.79-1.82 6.37 6.37 0 0 1 .35-1.7 2.78 2.78 0 0 1 2.39-1.94 17.91 17.91 0 0 1 3 .31V16zM6.82 7.36c-.11 1.77-2.87 4.2-3.73 5.75A11.43 11.43 0 0 0 2 15.95a7.53 7.53 0 0 0 .62 4.67c.91 2.18-.12 3 .59 2.54.88-.72.75-2.39.68-3.43a14.77 14.77 0 0 1 0-2.82 13.29 13.29 0 0 1 2.41-5.33 4.84 4.84 0 0 0 .52-4.22m.56 5s.29 1.4-1 5c-3.26 9.45 3 10.34 4.74 12.56 0 0 .69-1-2.14-4-1-1.12-2-3.6-1.15-7.15 1.17-5.13-.5-6.39-.5-6.39M1.21 6.2A4.53 4.53 0 0 1 1 4.7c.2-2.22 2.23-3.12 2.73-3.45A2.7 2.7 0 0 0 4.76 0a3 3 0 0 1-1.21 3.67A6.06 6.06 0 0 0 1.21 6.2m5.11-2.15c.11.23 1 1.45-2.48 4.27s-2.36 4.84-2.36 4.84-3.66-2 .56-5.53 3.35-4.2 3.35-4.2a1.05 1.05 0 0 1 .93.63m4.46 1.08c.59.08 1 1.92 2.35 2.32 1 .29 2.08.13 2.32.74a.52.52 0 0 0 .37.92c.39-1.12.58-5.24-5.03-3.98zm1.86.86c0-.13.12 0 .27-.12a1.66 1.66 0 0 1 .59-.48 1 1 0 0 1 .62 0c.12 0 0 .33 0 .4s-.74-.09-.74.32c0 .67.91 0 1.38 0 .23 1.64-2.48 1.19-2.08-.16z"></path></symbol></svg>
        </div>
        <div id="vlaanderen-footer">
          <div id="vlaanderen-footer-logo">
            <svg dangerouslySetInnerHTML={{__html: useTag }} />
            <div id="vlaanderen-footer-logo-text">
              <div id="vlaanderen-footer-logo-title">Vlaanderen</div>
              <div id="vlaanderen-footer-logo-tagline">verbeelding werkt</div>
            </div>
          </div>
          <div id="vlaanderen-footer-info">
              <div id="vlaanderen-footer-info-title">Dit is een officiële website van de Vlaamse overheid</div>
              <div id="vlaanderen-footer-info-publisher">
                <span>uitgegeven door&nbsp;</span>
                <span itemProp="publisher" itemScope="" itemType="http://schema.org/Organization">
                  <a itemProp="url" href="https://www.vlaanderen.be/nl/contact/adressengids/diensten-van-de-vlaamse-overheid/administratieve-diensten-van-de-vlaamse-overheid/beleidsdomein-kanselarij-en-bestuur/agentschap-informatie-vlaanderen" target="_self">
                    <span itemProp="name">het Agentschap Informatie Vlaanderen</span>
                  </a><span id="vbrVersion">{version}</span>
                </span>
              </div>
          </div>
        </div>
      </footer>
    }
  }
)

export default Footer
