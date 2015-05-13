describe('when displaying cohort', function() {

    var cohort = [
        {"id": 1,
            individuals : [
            {
                "name": "James"
            },
            {
                "name": "Rich"
            }]
        }
    ];

    it('receives the cohort list', function() {
        expect(ctrl.cohort).toEqual(cohort);
    });
});
