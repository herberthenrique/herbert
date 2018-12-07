'use strict';
const path = require('path');
const { h, Text } = require('ink');
const SelectInput = require('ink-select-input');
const BigText = require('ink-big-text');
const Gradient = require('ink-gradient');

const opn = require('opn');

const open = url => opn(url, { wait: false });

const handleSelect = item => {
  if (item.url) {
    open(item.url);
  }

  if (item.action) {
    item.action();
  }
};

const items = [
  {
    label: 'Twitter',
    url: 'https://twitter.com/herberth3nrique',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/herberthenrique',
  },
  {
    label: 'Website',
    url: 'http://herberthenrique.com',
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com/_herberthenrique',
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/herberthenrique',
  },

  {
    label: 'Quit',
    action() {
      process.exit();
    },
  },
];

module.exports = () => (
  <div>
    <br />
    <div>
      <Gradient name="rainbow">
        <BigText text="Herbert Henrique" />
      </Gradient>

      <Text>
        I’m a Developer and FrontEnd Engineer working now at SumUp.
        <br />
        I'm trying to write code for humans
      </Text>
    </div>
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
);
