import { Children } from "../../types/Children";


export function Fieldset({ children }: { children?: Children }) {
  return (
    <div className="popup__fieldset">
      {children}
    </div>
  );
}