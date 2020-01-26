// @flow
import hideText from '../hideText'

describe('hideText', () => {
  it('should return the CSS in JS', () => {
    expect({ ...hideText() }).toMatchSnapshot()
  })

  it('should add rules when block has existing rules', () => {
    expect({
      ...hideText(),
      'background-image': 'url(logo.png)',
    }).toMatchSnapshot()
  })
})
