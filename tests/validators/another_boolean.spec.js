describe('another_boolean', () => {

    const validate = require('../../src/validators/another_boolean');

    it('should pass if field_value true', () => {

        const state = {
            field_name: 'is_smb',
            field_value: true,
            field_validation_rule: { type: 'boolean' },
            validation_results: { }
        };

        validate(state);

        expect(state.validation_results).toEqual({});
    });

    it('should pass if field_value false', () => {

        const state = {
            field_name: 'is_smb',
            field_value: false,
            field_validation_rule: { type: 'boolean' },
            validation_results: { }
        };

        validate(state);

        expect(state.validation_results).toEqual({});
    });

    it('should pass if is_required false', () => {

        const state = {
            field_name: 'is_smb',
            field_validation_rule: { is_required: false, type: 'boolean' },
            validation_results: { }
        };

        validate(state);

        expect(state.validation_results).toEqual({});
    });

    it('should fail if field_value string', () => {

        const state = {
            field_name: 'is_smb',
            field_value: 'false',
            field_validation_rule: { type: 'boolean' },
            validation_results: { }
        };

        validate(state);

        expect(state.validation_results).toEqual({
            is_smb: [{ type: 'boolean' }]
        });
    });

    it('should fail if field_value string', () => {

        const state = {
            field_name: 'is_smb',
            field_value: 'false',
            field_validation_rule: { type: 'boolean', is_required: true },
            validation_results: { }
        };

        validate(state);

        expect(state.validation_results).toEqual({
            is_smb: [{ type: 'boolean' }]
        });
    });
});