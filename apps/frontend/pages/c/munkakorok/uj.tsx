import {
  createMunkakor,
  Munkakor,
  validateMunkakor,
} from "../../../api/munkakorok"
import { CegesPage } from "../../../components/ceges/CegesPage"
import Field from "../../../components/forms/Field"
import { Fieldset } from "../../../components/forms/Fieldset"
import Form from "../../../components/forms/Form"
import SubmitButton from "../../../components/forms/SubmitButton"

export default function UjMunkakorPage() {
  return (
    <CegesPage>
      <Form<Munkakor>
        initialValues={{ nev: "" }}
        validate={validateMunkakor}
        onSubmit={createMunkakor}
      >
        <Fieldset>
          <Field testid="Munkakör neve" label="Munkakör neve" name="nev" />
          <Field
            testid="Órabér"
            label="Órabér"
            name="oraber"
          />
        </Fieldset>
        <SubmitButton text="Mehet" />
      </Form>
    </CegesPage>
  )
}
