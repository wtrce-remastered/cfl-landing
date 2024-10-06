import { yupResolver } from "@hookform/resolvers/yup"
import React, { Fragment, useCallback, useMemo, useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { useTheme } from "styled-components"

import { Button, FlexBox, FormLabel, Icon, Note, Select, Unifier } from "shared/ui-kit"

import { DropdownField, InputField } from "features/form-fields"

import { FormDemoData, FormProps, FreightStep, toSelectOptions } from "widgets/freight-form/model"
import { Cargo, PalletCargoFormPayload, PalletCargoFormResolver } from "widgets/freight-form/model/forms/cargo.tsx"
import { CargoItem } from "widgets/freight-form/ui/forms/cargo/cargo-item"

import { AddCargoFormWrapper, ButtonGroup, CargoLabel, CargoLabelWrapper, CargoWeightGroup } from "./styled"

export const CargoForm: React.FC<FormProps> = ({ onSubmit, onReturn }) => {
    const theme = useTheme()

    const [cargos, setCargos] = useState<Cargo[]>([])

    const cargoTypeOptions = useMemo(() => toSelectOptions(FormDemoData.cargoTypes), [])
    const calculationTypeOptions = useMemo(() => toSelectOptions(FormDemoData.calculationType), [])
    const packingTypeOptions = useMemo(() => toSelectOptions(FormDemoData.packingType), [])

    const palletTypeOptions = useMemo(() => FormDemoData.palletTypes.map(type => ({ key: type, label: type })), [])
    const dimensionsUnitOptions = useMemo(() => FormDemoData.dimensionsUnits.map(type => ({ key: type, label: type })), [])
    const cargoWeightUnitOptions = useMemo(() => FormDemoData.cargoWeightUnits.map(type => ({ key: type, label: type })), [])

    const [cargoType, setCargoType] = useState(cargoTypeOptions[0].value)
    const [calculationType, setCalculationType] = useState(calculationTypeOptions[0].value)
    const [packingType, setPackingType] = useState(packingTypeOptions[0].value)

    const form = useForm<PalletCargoFormPayload>({
        mode: "onBlur",
        resolver: yupResolver(PalletCargoFormResolver),
        defaultValues: {
            type: "Pallet (undefined size)",
            dimensionUnit: "CM",
            weightType: "KG"
        }
    })

    const handleReturn = useCallback(() => onReturn && onReturn(), [onReturn])
    const handleSubmit = useCallback(() => onSubmit<PalletCargoFormPayload[]>(FreightStep.Cargo, cargos), [cargos, onSubmit])

    const handleRemoveCargo = useCallback((payload: string) => setCargos(prev => prev.filter(cargo => cargo.cargoId !== payload)), [])
    const handleAddCargo = useCallback(
        (payload: PalletCargoFormPayload) => setCargos(prev => [...prev, { ...payload, cargoId: (Number(cargos[cargos.length - 1]?.cargoId || 0) + 1).toString() }]),
        [cargos]
    )

    return (
        <FlexBox $gap="3.125rem" $direction="column">
            <CargoLabelWrapper>
                <CargoLabel>What type of cargo are you delivering?</CargoLabel>

                <Select type="buttons" value={cargoType} options={cargoTypeOptions} onChange={setCargoType} />
                <Select type="radio" value={calculationType} options={calculationTypeOptions} onChange={setCalculationType} />
            </CargoLabelWrapper>

            <FormLabel label="Packaging type">
                <Select type="buttons" value={packingType} options={packingTypeOptions} onChange={setPackingType} />
            </FormLabel>

            {!!cargos.length && (
                <Fragment>
                    <FlexBox $direction="column" $gap=".625rem">
                        {cargos.map(cargo => (
                            <CargoItem
                                cargoId={cargo.cargoId}
                                amount={cargo.amount}
                                details={`${cargo.dimensionLength}x${cargo.dimensionWidth}x${cargo.dimensionHeight} ${cargo.dimensionUnit} ${cargo.weight} ${cargo.weightType}`}
                                onRemove={handleRemoveCargo}
                                key={cargo.cargoId}
                            />
                        ))}
                    </FlexBox>

                    <Note $sideColor={theme.colors.green}>
                        Calculation based on total cargo volume is less accurate, and therefore more likely to incur additional fees for inaccurate or oversized dimensions.
                    </Note>
                </Fragment>
            )}

            <FormProvider {...form}>
                <AddCargoFormWrapper>
                    <FormLabel label="Pallet type">
                        <DropdownField name="type" options={palletTypeOptions} width="34.5rem" strict />
                    </FormLabel>

                    <FormLabel label="Dimensions (L×W×H per unit)">
                        <Unifier>
                            <InputField name="dimensionLength" placeholder="Length" $width="7.5rem" $borderless />
                            <InputField name="dimensionWidth" placeholder="Width" $width="7.5rem" $borderless />
                            <InputField name="dimensionHeight" placeholder="Height" $width="7.5rem" $borderless />
                            <DropdownField name="dimensionUnit" options={dimensionsUnitOptions} borderless mini />
                        </Unifier>
                    </FormLabel>

                    <CargoWeightGroup>
                        <FormLabel label="Cargo quantity" mini>
                            <Unifier $single>
                                <InputField name="amount" placeholder="1" type="number" $width="11.3125rem" $borderless />
                            </Unifier>
                        </FormLabel>

                        <FormLabel label="Weight (per unit)" mini>
                            <Unifier>
                                <InputField name="weight" placeholder="0" $width="8.125rem" $borderless />
                                <DropdownField name="weightType" options={cargoWeightUnitOptions} borderless mini />
                            </Unifier>
                        </FormLabel>
                    </CargoWeightGroup>
                </AddCargoFormWrapper>

                <ButtonGroup>
                    <Button disabled={!form.formState.isValid} onClick={form.handleSubmit(handleAddCargo)}>
                        Add cargo
                    </Button>

                    <Button onClick={handleReturn}>Previous step</Button>

                    <Button disabled={!cargos.length} onClick={handleSubmit}>
                        Next step <Icon.Arrow />
                    </Button>
                </ButtonGroup>
            </FormProvider>
        </FlexBox>
    )
}

