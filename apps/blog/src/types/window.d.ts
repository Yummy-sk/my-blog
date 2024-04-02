interface BootOptions {
  pluginKey: string;
}

type ChannelIO = (
  command: 'boot',
  bootOption: BootOptions,
  callback?: () => void,
) => void;

export declare global {
  interface Window {
    ChannelIO?: ChannelIO;
  }
}
