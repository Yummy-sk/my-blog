'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import * as Env from '@/utils/env';

export default function ChannelTalk() {
  const pluginKey = Env.get({ key: 'CHANNEL_TALK_PLUGIN_KEY' });

  useEffect(() => {
    try {
      const { ChannelIO } = window;

      if (ChannelIO) {
        ChannelIO('boot', {
          pluginKey,
        });
      }
    } catch (error) {
      console.error('ChannelIO is not defined');
    }
  }, [pluginKey]);

  return (
    <Script id="channel-talk-script" strategy="afterInteractive">
      {`
  (function () {
    var w = window;
    if (w.ChannelIO) {
      return w.console.error('ChannelIO script included twice.');
    }
    var ch = function () {
      ch.c(arguments);
    };
    ch.q = [];
    ch.c = function (args) {
      ch.q.push(args);
    };
    w.ChannelIO = ch;
    function l() {
      if (w.ChannelIOInitialized) {
        return;
      }
      w.ChannelIOInitialized = true;
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      var x = document.getElementsByTagName('script')[0];
      if (x.parentNode) {
        x.parentNode.insertBefore(s, x);
      }
    }
    if (document.readyState === 'complete') {
      l();
    } else {
      w.addEventListener('DOMContentLoaded', l);
      w.addEventListener('load', l);
    }
  })();
  `}
    </Script>
  );
}
