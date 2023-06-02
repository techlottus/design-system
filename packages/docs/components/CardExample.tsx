import React from "react";
import { Badge, Card } from "@exponentialeducation/betomic/src";
import { BarcodeIcon, IdIcon, KebabIcon, UpdateIcon } from "@exponentialeducation/iconography/icons/esm/index";

const CardBasicExample = () => {
  return (
    <div className="flex justify-center mt-3">
      <Card>
        <Card.Body>
          I'm a card!
        </Card.Body>
      </Card>
    </div>
  );
};

const CardStructureExample = () => {
  return (
    <div className="flex justify-center mt-3">
      <Card className="divide-y divide-surface-200">
        <Card.Header>
          Card header here
        </Card.Header>
        <Card.Body>
          Card body here
        </Card.Body>
        <Card.Footer>
          Card footer here
        </Card.Footer>
      </Card>
    </div>
  );
};

const CardStylingExample = () => {
  return (
    <div className="flex justify-center mt-3">
      <Card className="md:w-2/3">
        <Card.Body className="flex flex-col gap-4">
          <div className="flex items-start gap-4">
            <img src="https://bedu-staging-assets.s3-us-west-2.amazonaws.com/demo/session_02.png" className="flex-shrink-0 rounded w-20 h-20 object-cover" alt="Product icon" />
            <div className="flex flex-col gap-2 mr-auto">
              <p className="font-display font-bold text-xl leading-6 text-surface-600">
                Nombre del curso
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge content="Curso" className="bg-surface-500 text-white" />
                <Badge content="Activo" intent="success" />
              </div>
            </div>
            <button className="rounded text-surface-600 focus:outline-none focus:ring-2 focus:ring-offset-2">
              <KebabIcon className="w-5 h-5" />
            </button>
          </div>
          <hr className="text-surface-100 m-0" />
          <div className="flex flex-wrap gap-y-2 gap-x-5">
            <div className="flex items-center">
              <div className="text-primary-500 mr-1">
                <BarcodeIcon className="w-4 h-4" />
              </div>
              <span className="font-base text-sm text-surface-500 leading-6 truncate">
                MNE_M0N1C_000
              </span>
            </div>
            <div className="flex items-center">
              <div className="text-primary-500 mr-1">
                <IdIcon className="w-4 h-4" />
              </div>
              <span className="font-base text-sm text-surface-500 leading-6 truncate">
                989
              </span>
            </div>
            <div className="flex items-center">
              <div className="text-primary-500 mr-1">
                <UpdateIcon className="w-4 h-4" />
              </div>
              <span className="font-base text-sm text-surface-500 leading-6 truncate">
                Nombre del autor. 22/Ene/21
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export {
  CardBasicExample,
  CardStructureExample,
  CardStylingExample,
};