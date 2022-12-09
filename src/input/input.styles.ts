import { css } from 'lit';

export const InputStyle = css` 
    :host {
        font-family: 'Montserrat', sans-serif;
    }

    .wrapper {
        display: block;
        margin-bottom: 1rem;
        padding: 1rem;
    }

    input { 
     display: inline-block;
     width: 100%;
     border-radius: 5px;
     border: 1px solid rgba(204, 204, 204, 0.51);
     padding: 1rem;
     font-size: 1rem;
     font-family: 'Montserrat', sans-serif;
    }

    input:focus {
        outline: 1px solid #555;
      }

    label {
     display: inline-block;
     font-size: 1rem;
     margin-bottom: 0.5rem;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
}
`;