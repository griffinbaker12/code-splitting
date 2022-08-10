function Page2({ changePage }) {
  return (
    <div>
      <button onClick={() => changePage('page1')}>Page 1</button>
      <button disabled>Page 2</button>
      <button onClick={() => changePage('page3')}>Page 3</button>
    </div>
  );
}

export default Page2;
