import { Checkbox } from 'react-aria-components';

function MyCheckbox({ children, id,todos, toggleComplete, ...props }) {
  return (
    <Checkbox {...props}>
      {({ isSelected }) => (
        <>
          <input
            type="checkbox"
            name="input"
            id={id}
            checked={isSelected}
            onChange={() => toggleComplete(todos)}
            className={`mr-2 transition-colors duration-300 ${
              isSelected ? 'text-tertiary-1' : 'text-gray-400'
            } rounded cursor-pointer`}
          />
          <label
            className={`${
              isSelected ? 'line-through' : ''} transition-colors duration-300 `} onClick={() => toggleComplete(todos)}
          >
            {children}
          </label>
        </>
      )}
    </Checkbox>
  );
}

export default MyCheckbox;
