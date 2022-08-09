function Page3({ changePage }) {
  return (
    <div>
      <button onClick={() => changePage('page1')}>Page 1</button>
      <button onClick={() => changePage('page2')}>Page 2</button>
      <button disabled>Page 3</button>
    </div>
  );
}
export default Page3;
