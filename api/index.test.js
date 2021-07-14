import chai from 'chai'
const { expect } = chai;
import request from 'supertest';
import { SUBGRAPH_URL } from '../constants.js'

const supertest = new request(SUBGRAPH_URL)
const query = '{ setENSNames { id name } }'

describe("API", function () {
  it("returns all ens names", async function () {
    const response = await supertest.post('').send({ query: query});
    expect(response.status).to.eql(200);
    const { setENSNames } = response.body.data

    expect(typeof setENSNames).to.eql('object');
    expect(setENSNames.length).to.be.greaterThan(1);
    expect(setENSNames[0]).to.have.property('id')
    expect(typeof setENSNames[0].id).to.eql('string');
    expect(setENSNames[0]).to.have.property('name')
    expect(typeof setENSNames[0].name).to.eql('string');
  });
});