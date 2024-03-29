import { FC } from 'react'

const Footer: FC = () => (
  <footer className="text-center px-16 py-6 text-gray-500 text-sm mt-6">
    Tatar Typing &copy; {new Date().getFullYear()}
    <p>
      <a property="dct:title" rel="cc:attributionURL" href="https://tatartyping.com">Tatar Typing</a>
      {' '}
      is marked with
      {' '}
      <a href="http://creativecommons.org/publicdomain/zero/1.0?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style={{ display: 'inline-block' }}>
        CC0 1.0
      </a>
    </p>
    <p>
      <a href="https://github.com/tn/tatartyping.fyi/issues/new" target="_blank" rel="noreferrer noopener">🐞</a>
    </p>
  </footer>
)

export default Footer
