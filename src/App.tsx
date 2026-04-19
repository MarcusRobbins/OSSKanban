import { Counter } from './Counter';

export function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>Please use the menu below to visit different pages.</p>
      <nav aria-label="Main menu" style={{ marginTop: '1.5rem' }}>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '1rem' }}>
          <li><a href="./index.html">Home</a></li>
          <li><a href="./about.html">About</a></li>
          <li><a href="./contact.html">Contact</a></li>
        </ul>
      </nav>
      <section style={{ marginTop: '2rem' }}>
        <h2>Counter</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Counter />
          <button type="button">testywesty</button>
        </div>
      </section>
    </div>
  );
}
