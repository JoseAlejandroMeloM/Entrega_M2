import test from 'node:test';
import assert from 'node:assert/strict';
import { teamMembers } from '../src/config/teamMembers.js';
import { destinations } from '../src/routes/destinations.js';

test('footer contact list contains five unique institutional addresses', () => {
  assert.equal(teamMembers.length, 5);
  assert.equal(new Set(teamMembers.map(({ email }) => email)).size, 5);
  assert.ok(teamMembers.every(({ name, email }) => name.trim() && /^[a-z]+@unisabana\.edu\.co$/.test(email)));
});

test('terms is a public informational route outside primary navigation', () => {
  const terms = destinations.find(({ path }) => path === '/terms');
  assert.deepEqual(terms, { path: '/terms', page: 'terms', requiresAuth: false });
});
