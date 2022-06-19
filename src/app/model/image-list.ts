import { n } from './image-info/nature';
import { e } from './image-info/events';
import { u } from './image-info/urban';
import { s } from './image-info/space';
import { h } from './image-info/human';

export interface Picture {
  name: string;
  desc: string;
}

export const nature: Picture[][] = [
  [n['1']],
  [n['2'], n['22']],
  [n['3'], n['18'], n['9']],
  [n['4']],
  [n['35'], n['21'], n['36']],
  [n['37']],
  [n['32'], n['33']],
  [n['6'], n['12'], n['19']],
  [n['23']],
  [n['15'], n['10'], n['7']],
  [n['16'], n['13']],
  [n['31']],
  [n['34'], n['14']],
  [n['25']],
  [n['29'], n['30']],
  [n['5']],
];

export const urban: Picture[][] = [
  [u['6']],
  [u['26'], u['27'], u['22'], u['37']],
  [u['38']],
  [u['33'], u['36']],
  [u['32'], u['35'], u['34']],
  [u['30'], u['23']],
  [u['16']],
  [u['29'], u['1'], u['31']],
  [u['28']],
  [u['12'], u['14'], u['18']],
  [u['24'], u['25']],
  [u['20']],
  [u['4'], u['5']],
  [u['2']],
  [u['13'], u['21']],
  [u['19']],
  [u['11'], u['17'], u['8']],
  [u['15']],
];

export const human: Picture[][] = [
  [h['2']],
  [h['18'], h['19'], h['20']],
  [h['1'], h['3']],
  [h['11']],
  [h['15'], h['16'], h['17']],
  [h['4'], h['13']],
  [h['10']],
  [h['14'], h['12']],
  [h['5']],
  [h['6'], h['8']],
];

export const events: Picture[][] = [
  [e['1']],
  [e['13'], e['4'], e['6']],
  [e['9'], e['11']],
  [e['10'], e['2'], e['5'], e['12']],
  [e['3'], e['8']],
  [e['7']],
];

export const space: Picture[][] = [
  [s['10']],
  [s['11'], s['1']],
  [s['3']],
  [s['4'], s['5'], s['6']],
  [s['9']],
  [s['7'], s['8']],
];
