import React, {useState} from 'react';
import {Alert, View, Text, StyleSheet, Button, TextInput} from 'react-native';
import styles from '../component/Styles';
import ColorTheme from '../component/ColorTheme';
import {Dropdown} from 'react-native-element-dropdown';
import {useForm, Controller} from 'react-hook-form';

const data = [
  {label: 'First', value: '1'},
  {label: 'Second', value: '2'},
  {label: 'Thrid', value: '3'},
];

type FormValues = {
  firstName: string;
  lastName: string;
  rank: string;
};

const FireDatabase = () => {
  const [value, setRank] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      rank: '',
    },
  });
  const onSubmit = (data: FormValues) => {
    console.log('onsubmit-->', data, errors);
    Alert.alert('Form data', JSON.stringify(data), [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const renderLabel = text => {
    if (value || isFocus) {
      return <Text style={[style.label, isFocus]}>{text}</Text>;
    }
    return null;
  };

  return (
    <View style={styles.screenView}>
      <View>
        <Controller
          name="firstName"
          control={control}
          rules={{
            required: true,
            maxLength: 20,
            minLength: 1,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={style.container}>
              {renderLabel('First name')}
              <TextInput
                style={[style.input]}
                placeholder="First name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                maxLength={20}
              />
              {errors.firstName && <Text>This is required.</Text>}
            </View>
          )}
        />

        <Controller
          name="lastName"
          control={control}
          rules={{
            required: 'Last name is required',
            maxLength: 20,
            // pattern: {
            //   value: /d+/,
            //   message: 'This input is number only.',
            // },
            minLength: {
              value: 2,
              message: 'This input exceed maxLength.',
            },
            max: 20,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={style.container}>
              {renderLabel('Last name')}
              <TextInput
                placeholder="Last name"
                style={[style.input]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                maxLength={20}
              />
              {errors.lastName && <Text>{errors.lastName.message}</Text>}
            </View>
          )}
        />

        <Controller
          name="rank"
          control={control}
          rules={{
            required: 'Rank is required',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={style.container}>
              {renderLabel('Rank')}
              <Dropdown
                style={[
                  style.dropdown,
                  isFocus && {borderColor: ColorTheme.primaryColor},
                ]}
                placeholderStyle={style.placeholderStyle}
                selectedTextStyle={style.selectedTextStyle}
                inputSearchStyle={style.inputSearchStyle}
                iconStyle={style.iconStyle}
                containerStyle={style.containerStyle}
                data={data}
                search={false}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Rank' : 'Rank'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => {
                  setIsFocus(false);
                  onBlur;
                }}
                onChangeText={onChange}
                onChange={item => {
                  setRank(item.value);
                  setIsFocus(false);
                  setValue('rank', item.value, {shouldValidate: true});
                  onChange;
                }}
                activeColor={ColorTheme.primaryColor}
              />

              {errors.rank && <Text>{errors.rank?.message}</Text>}
            </View>
          )}
        />
        {/* <Text>{JSON.stringify(errors)}</Text> */}
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

export default FireDatabase;

const style = StyleSheet.create({
  container: {
    backgroundColor: ColorTheme.white,
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: ColorTheme.primaryColor,
    borderWidth: 0.5,
    // borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: ColorTheme.white,
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: ColorTheme.primaryColor,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  containerStyle: {
    backgroundColor: ColorTheme.white,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  input: {
    color: ColorTheme.black,
    height: 50,
    borderWidth: 1,
    borderColor: ColorTheme.primaryColor,
    paddingHorizontal: 8,
  },
});
