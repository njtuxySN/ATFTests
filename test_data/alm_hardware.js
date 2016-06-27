var field_types;
field_types = {
    STRING: 1,
    JOURNAL_INPUT: 2,
    CHOICELIST: 3,
    REFERENCE: 4,
    DATETIME: 5,
    BOOLEAN: 6,
    CURRENCY: 7,
    DATE: 8,
    INTEGER: 9,
    PRICE: 10,
    CLASS: 11
};

module.exports = {
    fields: [
        // {field_type: field_types.CHOICELIST, field_name: "Acquisition method",  field_value: "Lease", expected_value: "lease"},
        // {field_type: field_types.BOOLEAN, field_name: "Active transfer order",  field_value: "true"},
        {field_type: field_types.STRING, field_name: "Asset tag",  field_value: "YanTesting 1"},
        {field_type: field_types.DATETIME, field_name: "Assigned",  field_value: "2016-06-23 16:22:22"},
        // {field_type: field_types.REFERENCE, field_name: "Assigned to",  field_value: "Abel Tuter"},
        {field_type: field_types.STRING, field_name: "Comments",  field_value: "Some comments form automation test"},
        {field_type: field_types.DATE, field_name: "Retired date",  field_value: "2016-06-23"},
        {field_type: field_types.JOURNAL_INPUT, field_name: "Work notes",  field_value: "should be a long text here"},
        {field_type: field_types.PRICE, field_name: "Resale price", field_value: "2500.0"},
        // {field_type: field_types.REFERENCE, field_name: "Company", field_value: "3Com"},
        {field_type: field_types.CURRENCY, field_name: "Cost", field_value: "11000.0"},
        // {field_type: field_types.REFERENCE, field_name: "Cost center", field_value: "Engineering"},
        {field_type: field_types.STRING, field_name: "Display name", field_value: "A Automated Ticket"}
    ]
};