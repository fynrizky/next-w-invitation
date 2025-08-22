export {}; // supaya dianggap module

declare global {
  interface Window {
    globalAudio?: HTMLAudioElement;
  }
}