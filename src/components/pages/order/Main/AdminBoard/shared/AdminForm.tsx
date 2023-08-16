import styled from "styled-components";
import {InputText} from "../../../../../shared/Input/InputText.tsx";
import {theme} from "../../../../../../theme";
import {
  ChangeEvent, FormEventHandler, forwardRef,
  PropsWithChildren,
} from "react";

import {MenuItem} from "../../../../../../data/fakeMenu.ts";

import {AdminFormImagePreview} from "./AdminFormImagePreview.tsx";
import {getInputs, getProductPropertyValueFromInputName} from "../data/productInputConfig.tsx";


//https://c-pi.niceshops.com/upload/image/product/large/default/haribo-tropi-frutti-100-g-922290-fr.jpg
const AdminFormStyled = styled.form`
  display: flex;
  gap: 2rem;
  width: 100%;
  height: 16rem;

  .productForm__fields {
    display: flex;
    flex-direction: column;
    gap: .8rem;
    flex: 1 1 100%;
  }

  .productForm__field {
    background-color: ${theme.colors.background_white};
    padding-inline: 1.6rem;
    padding-block: .8rem;

    > input {
      background-color: ${theme.colors.background_white};
    }
  }
  
  .productForm__footer {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap:1.5rem;
  }
`

type AdminFormProps = {
  product: MenuItem
  onSubmit?:  FormEventHandler<HTMLFormElement>
  isSubmitted?: boolean
  onChange: (event : ChangeEvent<HTMLInputElement>) => void
} & PropsWithChildren

// eslint-disable-next-line react/display-name
export const AdminForm = forwardRef<HTMLInputElement,AdminFormProps>(({product, onSubmit, onChange, children}: AdminFormProps, ref) => {
  const inputs = getInputs(product)

  return (
    <AdminFormStyled onSubmit={onSubmit}>
      <AdminFormImagePreview imageUrl={product.imageSource}/>
      <div className={"productForm__fields"}>
        {
          inputs.map((input) => {
            return <InputText key={input.name} name={input.name}
                              value={getProductPropertyValueFromInputName(product, input.name)}
                              Icon={input.Icon}
                              placeholder={input.placeholder}
                              ariaLabel={input.ariaLabel}
                              pattern={input.pattern}
                              onInput={onChange}
                              ref={ref && input.name === "productName" ? ref : null}
            />
          })
        }

        <div className={"productForm__footer"}>
          {children}
        </div>
      </div>
    </AdminFormStyled>
  )
})