import classNames from 'classnames';

const Spinner = ({ className }: { className?: string }) => (
  <div className={classNames('custom-loader', className)}></div>
);

export default Spinner;
