import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const Header = () => {
  const [current, setCurrent] = useState('/imdb');

  const [path] = useState(window.location.pathname);

  useEffect(() => {
    if (path === "/") setCurrent('/imdb')
    else setCurrent(path)
  }, [path])

  const items = [
    {
      label: <Link to="/">Movies IMDB</Link>,
      key: '/imdb',
    },
    {
      label: <Link to="/series">Web Series</Link>,
      key: '/series',
    },
    {
      label: <Link to="/movies">Movies</Link>,
      key: '/movies',
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