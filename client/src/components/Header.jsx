import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const Header = () => {
  const [current, setCurrent] = useState('/movies');

  const [path] = useState(window.location.pathname);

  useEffect(() => {
    if (path === "/") setCurrent('/movies')
    else setCurrent(path)
  }, [path])

  const items = [
    {
      label: <Link to="/">Movies IMDB</Link>,
      key: '/movies',
    },
    {
      label: <Link to="/series">Web Series</Link>,
      key: '/series',
    },
    {
      label: <Link to="/config">Add New Item</Link>,
      key: '/config',
    }
  ]

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    </>
  )
};

export default Header;