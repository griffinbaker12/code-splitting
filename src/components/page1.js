function Page1({ changePage }) {
  return (
    <div>
      <button disabled>Page 1</button>
      <button onClick={() => changePage('page2')}>Page 2</button>
      <button onClick={() => changePage('page3')}>Page 3</button>
    </div>
  );
}
export default Page1;
