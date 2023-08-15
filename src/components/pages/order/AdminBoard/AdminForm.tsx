import styled from "styled-components";
import {InputText} from "../../../shared/InputText.tsx";
import {theme} from "../../../../theme";
import {
  ChangeEvent, FormEvent, FormEventHandler,
  InputHTMLAttributes,
  PropsWithChildren,
  ReactElement,
} from "react";

import {MenuItem} from "../../../../data/fakeMenu.ts";

import {ImagePreview} from "./ImagePreview.tsx";
import {getInputs, getProductPropertyValueFromInputName} from "./productInputConfig.tsx";


//https://c-pi.niceshops.com/upload/image/product/large/default/haribo-tropi-frutti-100-g-922290-fr.jpg
const AdminAddProductFormStyled = styled.form`
  display: flex;
  gap: 2rem;
  width: 90rem;
  height: 16rem;

  .productForm__fields {
    display: flex;
    flex-direction: column;
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

    .productForm__notification-message {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      gap:.5rem;
      font-family: "Open Sans", sans-serif;
      font-size: 1.5rem;
      color: ${theme.colors.success};
      
      > .icon {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }

`

type AdminFormProps = {
  product: MenuItem
  onSubmit:  FormEventHandler<HTMLFormElement>
  onChange: (event : ChangeEvent<HTMLInputElement>) => void
  isSubmitted: boolean
} & PropsWithChildren
export const AdminForm = ({product, onSubmit, onChange, children}: AdminFormProps) => {
  // state

  // handlers

  const inputs = getInputs(product)

  // display
  return (
    <AdminAddProductFormStyled onSubmit={onSubmit}>
      <ImagePreview imageUrl={product.imageSource}/>
      <div className={"productForm__fields"}>
        {
          inputs.map((input) => {
            return <InputText key={input.name} name={input.name}
                              value={input.value as string}
                              Icon={input.Icon}
                              placeholder={input.placeholder}
                              ariaLabel={input.ariaLabel}
                              pattern={input.pattern}
                              onInput={onChange}
            />
          })
        }

        <div className={"productForm__footer"}>
          {children}
        </div>
      </div>
    </AdminAddProductFormStyled>
  )
}