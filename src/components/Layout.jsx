import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <nav className="bg-primary">
        <h2 className="text-white font-medium py-4 px-5 text-2xl">
          Wellness Retreats
        </h2>
      </nav>
      <main className="flex-1 px-5 py-6">{children}</main>
      <footer>
        <div className="text-center text-sm py-4">
          © 2024 Wellness Retreats. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node
};
