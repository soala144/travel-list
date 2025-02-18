export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

// Logo Component
function Logo() {
  return <h1>🌴 Far Away🚀</h1>;
}

// Logo Form
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need😍 for your trip?</h3>
    </div>
  );
}

// Logo PackingList
function PackingList() {
  return <div className="list">LIST</div>;
}

// Logo Stats
function Stats() {
  return (
    <footer className="stats">
      <em>
        You have have X items on your list, and you have already done X(X%)
      </em>
    </footer>
  );
}
