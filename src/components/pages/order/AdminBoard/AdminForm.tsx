import styled from "styled-components";
import {InputText} from "../../../shared/InputText.tsx";
import {theme} from "../../../../theme";
import {
  ChangeEvent, FormEventHandler, forwardRef,
  PropsWithChildren,
} from "react";

import {MenuItem} from "../../../../data/fakeMenu.ts";

import {ImagePreview} from "./ImagePreview.tsx";
import {getInputs, getProductPropertyValueFromInputName} from "./productInputConfig.tsx";


//https://c-pi.niceshops.com/upload/image/product/large/default/haribo-tropi-frutti-100-g-922290-fr.jpg
const AdminFormStyled = styled.form`
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

    .message {
      color: ${theme.colors.primary_burger};
      font-family: "Open Sans", sans-serif;
      font-size: 1.5rem;

      .underline {
        text-decoration-line: underline;
      }
    }
  }

`

type AdminFormProps = {
  product: MenuItem
  onSubmit?:  FormEventHandler<HTMLFormElement>
  isSubmitted?: boolean
  onChange: (event : ChangeEvent<HTMLInputElement>) => void
} & PropsWithChildren
export const AdminForm = forwardRef<HTMLInputElement,AdminFormProps>(({product, onSubmit, onChange, children}: AdminFormProps, ref) => {
  const inputs = getInputs(product)

  return (
    <AdminFormStyled onSubmit={onSubmit}>
      <ImagePreview imageUrl={product.imageSource}/>
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
                              ref={ref && input.name === "productImage" ? ref : null}
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